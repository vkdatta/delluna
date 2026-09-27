export const name="speaker_group";
export const id="dl_8f154712e363d88a777c";
export const url=new URL("../icons/speaker_group.svg?v=62055f250f4483de7c8f9a7e62b441b656cb508603be0fb74c08df3a79cbfcf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
