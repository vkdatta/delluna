export const name="recommend";
export const id="dl_69b05794aa25ac9b34cd";
export const url=new URL("../icons/recommend.svg?v=7c6d416b2807b069b6506a4962715c000f7025b3c9ba57355464e3db96ddfa0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
