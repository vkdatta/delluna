export const name="cigarette-slash";
export const id="dl_b37630c9d42f4fe69dc0";
export const url=new URL("../icons/cigarette-slash.svg?v=413fe430167d45ecc4f845c754657d12e9188771ef8f38bf984a58ebff85ff62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
