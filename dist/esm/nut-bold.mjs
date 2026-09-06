export const name="nut-bold";
export const id="dl_d7ea5618328a4a22a736";
export const url=new URL("../icons/nut-bold.svg?v=39b63d98072909671f0fd91f2983f76264a2f150706d38f3566c79fdde95b2ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
