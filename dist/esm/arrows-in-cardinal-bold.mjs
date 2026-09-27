export const name="arrows-in-cardinal-bold";
export const id="dl_088ab09947f7488d9d39";
export const url=new URL("../icons/arrows-in-cardinal-bold.svg?v=99ad0e0a91b4aea3201fe9e31d42fc46ad97b65a85e7170f9962a397190bcae9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
