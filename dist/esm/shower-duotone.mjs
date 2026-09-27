export const name="shower-duotone";
export const id="dl_2ca48a8d447c203b07a2";
export const url=new URL("../icons/shower-duotone.svg?v=486b52d66417cf85f909df925bfd93f74585fa2b8d58cb9e5fd13512cb7a8e73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
