export const name="skip-forward-bold";
export const id="dl_c1fa4c0402b2cb10c2c9";
export const url=new URL("../icons/skip-forward-bold.svg?v=b97546bbe0f880f52ac8bf27c1283514b1fb52d74cd6f5ce691257d06f4e81db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
