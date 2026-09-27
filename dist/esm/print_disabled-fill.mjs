export const name="print_disabled-fill";
export const id="dl_2c4eecc1b639c24e0432";
export const url=new URL("../icons/print_disabled-fill.svg?v=33c695bb99fa4e5a3a5c3e964422f8e7f72062218d975decaed93b4745d7d9ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
