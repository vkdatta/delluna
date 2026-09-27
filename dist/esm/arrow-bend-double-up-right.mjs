export const name="arrow-bend-double-up-right";
export const id="dl_8153cf497b64422a8305";
export const url=new URL("../icons/arrow-bend-double-up-right.svg?v=df71d5b239cab8cbc98eb08749addd306aba3921b85086504df951df2cab3e86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
