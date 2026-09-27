export const name="corporate_fare";
export const id="dl_aeb14f518710c0702fef";
export const url=new URL("../icons/corporate_fare.svg?v=60979fe7e9d7e805d3d9498a749effdfbbc30f31726e7ec2119398a470b55af7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
