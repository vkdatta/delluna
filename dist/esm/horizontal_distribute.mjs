export const name="horizontal_distribute";
export const id="dl_f8757561e6ef4f3e9fef";
export const url=new URL("../icons/H/horizontal_distribute.svg?v=d414d7661c7d73a1956ed408d0de9e4555cd713b5a5f94fb9094db20fb0cfc08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
