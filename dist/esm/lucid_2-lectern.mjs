export const name="lucid_2-lectern";
export const id="dl_7fc2b5b79c0140919812";
export const url=new URL("../icons/lucid_2-lectern.svg?v=04c3c023f85c749bc912b293fdcc2ffd3ddbe65d6194531a6ac7bf4314750ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
