export const name="monorail-fill";
export const id="dl_92fa1b77206b46aba4b8";
export const url=new URL("../icons/monorail-fill.svg?v=b99ab6b67540c39202780e1dee49ffb62baa1efade29fe2d93aab65b7e5d39e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
