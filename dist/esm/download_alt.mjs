export const name="download_alt";
export const id="dl_e86c7fc559d14babacf9";
export const url=new URL("../icons/all_60_named_svgs/download_alt.svg?v=3a6e0f148c4976542dab7f976d342986d828a7df3368fa50334b04bb2955d271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
