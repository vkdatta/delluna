export const name="sports_score";
export const id="dl_f97896b9cdb3eac31bdb";
export const url=new URL("../icons/sports_score.svg?v=94a9fb16a80af2e89b16891b66a3b7193d47e03761f7a53268ab3bc7fb7468a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
