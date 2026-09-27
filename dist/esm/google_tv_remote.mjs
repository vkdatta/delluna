export const name="google_tv_remote";
export const id="dl_2bc2f986c7be6f7023ce";
export const url=new URL("../icons/google_tv_remote.svg?v=6afa7236a794d8f611f10b44482d3a2a23081220c1adff5faaf1c6f91f664cfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
