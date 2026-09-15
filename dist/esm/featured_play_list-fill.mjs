export const name="featured_play_list-fill";
export const id="dl_cba697012e9e409b9026";
export const url=new URL("../icons/F/featured_play_list-fill.svg?v=2c3297ef698a4218da82dd4363a86d90b9e4af87e80570cfbcc74e97d61f97e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
