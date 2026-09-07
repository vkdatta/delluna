export const name="test-tube-duotone";
export const id="dl_b078e208887c428398e5";
export const url=new URL("../icons/T/test-tube-duotone.svg?v=662c065a648ee23b21849191d9f01f2a79e27e27abb734766cf8dd2e297480b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
