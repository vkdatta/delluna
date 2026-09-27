export const name="dress-light";
export const id="dl_9884db232f2b4dd0b63c";
export const url=new URL("../icons/dress-light.svg?v=5667baa13c0e2ec519fcfe161ddbec8a759683eb2a69a9f60b1fd9fadfe32ce8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
