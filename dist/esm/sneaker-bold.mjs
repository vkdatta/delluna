export const name="sneaker-bold";
export const id="dl_4eda84d263a8ef4ddd56";
export const url=new URL("../icons/sneaker-bold.svg?v=4e688243b74b9194fe537e78c4350a2d58401b9f7e4c453642ec0b7e76853ce8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
