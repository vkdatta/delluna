export const name="rotate_right-fill";
export const id="dl_089fbbc7004440bb8bb7";
export const url=new URL("../icons/rotate_right-fill.svg?v=818d4aede58870eefa29a2f79dd306685b69c9fd5df1c9d5e3a2f63a925877fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
