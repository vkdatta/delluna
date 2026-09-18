export const name="settings_system_daydream";
export const id="dl_34f0729ac0074a59ac75";
export const url=new URL("../icons/S/settings_system_daydream.svg?v=181881fecbbec2c72462751fdfeb5447d289b712089c7fc61da4db024ffa1e0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
