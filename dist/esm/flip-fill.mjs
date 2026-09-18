export const name="flip-fill";
export const id="dl_c5918bd9438044a1b021";
export const url=new URL("../icons/flip-fill.svg?v=ef09baacf977291d2f94dfb12a9dfc7bf03eaa3e48394df70a88dbd2d0cd2275",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
