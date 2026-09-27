export const name="text_ad_off";
export const id="dl_8265dd6ecf8b26a885eb";
export const url=new URL("../icons/text_ad_off.svg?v=b609bbabf1e01ebf2268bd94f65534661bbdf3a82884b664fffbb80d13677bd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
