export const name="lucid_2-grip";
export const id="dl_21cc8c3de46343a9853c";
export const url=new URL("../icons/lucid_2-grip.svg?v=24856ad7a56b829eabad99dcf9b5f8f8a539fa7e141e7cddba9c7d7bca55b7bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
