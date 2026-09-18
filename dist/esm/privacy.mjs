export const name="privacy";
export const id="dl_3598ea876dfc49b197e1";
export const url=new URL("../icons/privacy.svg?v=ae7697d43720793b5a5258b045585b0defdf1732d2e95c63d1edfcb5e737ae6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
