export const name="beer-bottle-thin";
export const id="dl_915b7fd2b7054a0fbf1e";
export const url=new URL("../icons/beer-bottle-thin.svg?v=d70c40e9d869e26796f18b3311cb22e37e2ae9767fe01df7add7703e1913404e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
