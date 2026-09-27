export const name="settings_system_daydream";
export const id="dl_ab72c01d845788a459a0";
export const url=new URL("../icons/settings_system_daydream.svg?v=54d9039a0a0bba0f77a2305391044d871b9d5845ee17389d9937840cd3a4a3a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
