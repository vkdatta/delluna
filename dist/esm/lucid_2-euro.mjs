export const name="lucid_2-euro";
export const id="dl_7774b7fa4e6345c2b134";
export const url=new URL("../icons/lucid_2-euro.svg?v=1bd5293f64962d04b65e7935d2790a2854cba910f856fa73ed40c6f15dcec916",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
