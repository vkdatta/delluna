export const name="home_mini";
export const id="dl_3c85917a5e461d4ea096";
export const url=new URL("../icons/home_mini.svg?v=7435fb32ad50d8de96123ba6fea3b4ccc8e082b271bd3cd41b90201019de5261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
