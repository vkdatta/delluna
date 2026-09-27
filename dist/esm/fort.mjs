export const name="fort";
export const id="dl_15cc5bd3c645bf8691ad";
export const url=new URL("../icons/fort.svg?v=a239f9ee759871bd1c0a6419cab06e5669f653466480b30fb56d0ec0b033a406",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
