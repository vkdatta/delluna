export const name="settings_remote";
export const id="dl_f8d5cab29ede12d9f893";
export const url=new URL("../icons/settings_remote.svg?v=2fad14ba0833e26f184d1fd86b59be0b8737741a94c305e1edd3c7174cf53013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
