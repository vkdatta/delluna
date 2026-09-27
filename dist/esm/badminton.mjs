export const name="badminton";
export const id="dl_d4b8aa33f566ba0a4386";
export const url=new URL("../icons/badminton.svg?v=f62e7db7db968372da26ef1e9a11a1cfc7fa3439b588cae38e8334e1e0f3c9c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
