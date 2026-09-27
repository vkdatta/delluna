export const name="file-pdf-bold";
export const id="dl_e4b7689e1acf4b779157";
export const url=new URL("../icons/file-pdf-bold.svg?v=e2de4e24f67bbe7f1e814e4039962b63d9f91207924ba9169270b179abd99be8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
