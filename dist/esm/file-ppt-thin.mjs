export const name="file-ppt-thin";
export const id="dl_e62c6423182d4118ac07";
export const url=new URL("../icons/file-ppt-thin.svg?v=c90b6f63ea2b1b866a925f637766e25a112d4a5d01e7204f061f2733d796537e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
