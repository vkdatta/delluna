export const name="calendar-heart-bold";
export const id="dl_09efb0e980114ca0a064";
export const url=new URL("../icons/calendar-heart-bold.svg?v=2d7b34aeeb6aea92982d4aefcd589a70ae1ebfa1364c3c57288e829bedd3b83d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
