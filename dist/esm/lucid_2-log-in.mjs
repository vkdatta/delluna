export const name="lucid_2-log-in";
export const id="dl_a4d5a378c19640689165";
export const url=new URL("../icons/lucid_2-log-in.svg?v=fa360b163b6b16f72724a23b2ae50019aadf7470671ce8e97e2e3378fd9ed836",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
