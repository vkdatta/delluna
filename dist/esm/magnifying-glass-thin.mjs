export const name="magnifying-glass-thin";
export const id="dl_0de58e36749d49998022";
export const url=new URL("../icons/magnifying-glass-thin.svg?v=b54742a097380913c9874626ea09012ab8bfff357af645b94027b14c99b22407",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
