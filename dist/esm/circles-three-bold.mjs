export const name="circles-three-bold";
export const id="dl_465594adb30e45a7bfec";
export const url=new URL("../icons/circles-three-bold.svg?v=78df45641b041c044f15e3685c75ecdea55c6fad3e2cb02a335de8bc78b404c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
