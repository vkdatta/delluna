export const name="clear_day";
export const id="dl_44d91aa9189bb4f1cdd0";
export const url=new URL("../icons/clear_day.svg?v=06d296a8fbdeabff8d8acc4d1a7541f8c87f12a705447c63ead87329f269a419",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
