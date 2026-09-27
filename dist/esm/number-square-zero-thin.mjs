export const name="number-square-zero-thin";
export const id="dl_059205b5984c454e9df3";
export const url=new URL("../icons/number-square-zero-thin.svg?v=4d5807d1e2492bf58fc014b824fb0cb1ee986cf97b83969f1cdeab8433aa72ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
