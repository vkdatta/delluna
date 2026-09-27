export const name="zoom-out";
export const id="dl_9a9dfb683b3d4611affb";
export const url=new URL("../icons/zoom-out.svg?v=1b6036f9a80c71718feae423fbb0facd13b87b660b2a31be1de21ddb280bf998",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
