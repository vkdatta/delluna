export const name="send_time_extension";
export const id="dl_e94044a859210132cea7";
export const url=new URL("../icons/send_time_extension.svg?v=e6fd04c388df7eb0bd3b17a7a13c50cd7462942b6227fe4c3684450646a22fed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
