export const name="wall-thin";
export const id="dl_b8a753c37e9c44e18848";
export const url=new URL("../icons/W/wall-thin.svg?v=da45ff4abcbaef91362e3828cc6dd05b52216404aa80f9f47a45c6a79a2419a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
