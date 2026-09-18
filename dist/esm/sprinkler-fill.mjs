export const name="sprinkler-fill";
export const id="dl_2005cde578f843c3b04a";
export const url=new URL("../icons/sprinkler-fill.svg?v=5b1863db3d1f505b8d39be1f87da7f9988f52fb880b71f99f147bd18b56921a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
