export const name="file-cpp-light";
export const id="dl_a93f57c94b3e4e98991c";
export const url=new URL("../icons/file-cpp-light.svg?v=b80c0f3842fefc6f4e19c176c585ff1234cc7e0fd7212e6a094bf2e3a77083f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
