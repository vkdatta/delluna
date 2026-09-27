export const name="not-member-of-light";
export const id="dl_ffcc72f2bf1949459a41";
export const url=new URL("../icons/not-member-of-light.svg?v=5976b16929514ddd2db6cf98f701d6940c0e816be1207192ead66b8a55d4b695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
