export const name="bookmarks-simple-thin";
export const id="dl_65af7b22179d45dbabb9";
export const url=new URL("../icons/bookmarks-simple-thin.svg?v=ec1215a95a1ee4459354bbd6b3aa4ffdbd1226910305f4550db9a2ef976b9c0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
