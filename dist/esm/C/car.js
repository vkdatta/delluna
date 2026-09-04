export const name="car";
export const id="dl_8d5db58372514d1992bb";
export const url=new URL("../../icons/C/car.svg?v=394e30a020b4e1dbe4dc789f0161e607142211b4b0f65f97855ec1de4ad2397b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
