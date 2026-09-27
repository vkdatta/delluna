export const name="close_circle";
export const id="dl_55c080f684061626d1e9";
export const url=new URL("../icons/close_circle.svg?v=95db64f6456a1075aaba89b6f3cafff7600e3ca7469092b06469a18c640d3f69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
