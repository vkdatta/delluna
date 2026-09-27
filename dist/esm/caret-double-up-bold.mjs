export const name="caret-double-up-bold";
export const id="dl_d9c045cbf12a4a6aa1e2";
export const url=new URL("../icons/caret-double-up-bold.svg?v=d2fb7ce1cf02867e72903e780616e4e1bc94347a4b47f4a4ab3ff37250c07f34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
