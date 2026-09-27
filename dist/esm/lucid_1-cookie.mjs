export const name="lucid_1-cookie";
export const id="dl_5427c4f147154ff5a781";
export const url=new URL("../icons/lucid_1-cookie.svg?v=5f6adb627358a67bc0158b8b1fd9e9b2933ba8e05e3ae7af51a14f53a4fc010e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
