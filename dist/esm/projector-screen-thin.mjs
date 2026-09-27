export const name="projector-screen-thin";
export const id="dl_e4e73cd52c9c46d99076";
export const url=new URL("../icons/projector-screen-thin.svg?v=2db73774e8e1779d1271fe499f395fc1a88aaca1fbc9e70478f392a4eed32b43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
