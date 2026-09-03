export const name="thumbs-up";
export const id="dl_ade39af6cfc8468683e5";
export const url=new URL("../../icons/lucid_4/thumbs-up.svg?v=070426339ccdd0ec512076151d14abc691eeea0456629fc8dd2c3850a7153249",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
