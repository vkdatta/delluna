export const name="ear-slash";
export const id="dl_fd1c031908fa404db19c";
export const url=new URL("../icons/ear-slash.svg?v=7dab04a194083d4da970e480259768391b23933db3423f8bc5ba17d57a4ac484",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
