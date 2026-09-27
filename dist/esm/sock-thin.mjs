export const name="sock-thin";
export const id="dl_47adb378640754a7fa8e";
export const url=new URL("../icons/sock-thin.svg?v=78f3f38b3ede0c65202cc57a18834bd1af2ce9f34fb5894cd8262625821c9f23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
