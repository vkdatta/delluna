export const name="download-simple-thin";
export const id="dl_e7ad5349f68f4caba6b8";
export const url=new URL("../../icons/D/download-simple-thin.svg?v=d1cecfcd679ff41acf99af716de672d13dad61c4439dcf320062fba75a657eae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
