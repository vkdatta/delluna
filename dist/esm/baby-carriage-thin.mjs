export const name="baby-carriage-thin";
export const id="dl_f2acebe7931848d0b333";
export const url=new URL("../icons/baby-carriage-thin.svg?v=4ffdee76fa2b032cc25b1c686c3cb5dac22a4b8cb1540ee806e6d4dbe79e3c75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
